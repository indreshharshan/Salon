const mongoose = require('mongoose');
require('dotenv').config();
const Service = require('./models/Service');

const dummyServices = [
    {
        name: 'Classic Haircut',
        price: 500,
        duration: 45,
        category: 'hair',
        description: 'Professional hair cutting and styling for all hair types.',
        isActive: true
    },
    {
        name: 'Bridal Makeup',
        price: 5000,
        duration: 120,
        category: 'makeup',
        description: 'Full bridal makeup and hair styling for your special day.',
        isActive: true
    },
    {
        name: 'Gel Manicure',
        price: 800,
        duration: 60,
        category: 'nails',
        description: 'Long-lasting gel nail paint with professional finishing.',
        isActive: true
    },
    {
        name: 'Deep Tissue Massage',
        price: 1500,
        duration: 90,
        category: 'massage',
        description: 'Full body deep tissue massage to relieve muscle tension.',
        isActive: true
    }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        
        await Service.deleteMany({}); // Optional: clear existing
        const services = await Service.insertMany(dummyServices);
        
        console.log(`Successfully seeded ${services.length} services!`);
        console.log('Admin -> User link is now active.');
        
        await mongoose.disconnect();
    } catch (error) {
        console.error('Seeding failed:', error);
    }
}

seed();
