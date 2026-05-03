const fs = require('fs');
const path = require('path');
const axios = require('axios');

/**
 * Audit logging utility for security events
 */
class AuditLogger {
  constructor() {
    this.logsDir = path.join(process.cwd(), 'logs');
    
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  /**
   * Log an audit event
   */
  async log(arg1, arg2, arg3, arg4 = {}) {
    let entry;
    
    if (typeof arg1 === 'object' && arg1 !== null) {
      // Handle call as log({ category, type, message, ...metadata })
      entry = {
        timestamp: new Date().toISOString(),
        ...arg1
      };
    } else {
      // Handle call as log(category, type, message, metadata)
      entry = {
        timestamp: new Date().toISOString(),
        category: arg1,
        type: arg2,
        message: arg3,
        ...arg4
      };
    }

    try {
      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[AUDIT] ${entry.category}:${entry.type} - ${entry.message || ''}`, 
          Object.keys(entry).length > 4 ? JSON.stringify(entry, null, 2) : '');
      }

      // File log in production
      if (process.env.NODE_ENV === 'production' || process.env.ENABLE_FILE_LOGGING === 'true') {
        const date = new Date().toISOString().split('T')[0];
        const logFile = path.join(this.logsDir, `audit_${date}.log`);
        
        fs.appendFileSync(logFile, JSON.stringify(entry) + '\n');
      }

      // Send to external service if configured
      if (process.env.AUDIT_LOG_URL) {
        this._sendToExternalService(entry);
      }
    } catch (error) {
      console.error('[AUDIT ERROR]', error.message);
    }
  }

  /**
   * Log authentication event
   */
  async logAuthentication(type, message, metadata = {}) {
    await this.log('AUTHENTICATION', type, message, metadata);
  }

  /**
   * Log authorization event
   */
  async logAuthorization(type, message, metadata = {}) {
    await this.log('AUTHORIZATION', type, message, metadata);
  }

  /**
   * Log data modification event
   */
  async logDataModification(type, message, metadata = {}) {
    await this.log('DATA_MODIFICATION', type, message, metadata);
  }

  /**
   * Log security event
   */
  async logSecurityEvent(type, message, metadata = {}) {
    await this.log('SECURITY', type, message, metadata);
  }

  /**
   * Send log to external service
   */
  _sendToExternalService(entry) {
    // Non-blocking async operation
    setImmediate(async () => {
      try {
        await axios.post(process.env.AUDIT_LOG_URL, entry, {
          timeout: 5000
        });
      } catch (error) {
        console.error('[AUDIT LOG SEND ERROR]', error.message);
      }
    });
  }
}

module.exports = new AuditLogger();
