const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const axios = require('axios');

require('dotenv/config');

module.exports = {
    async index(req, res) {
        const events = await knex('events')
            .where('ownerId', req.user.id);

        return res.json(events);
    },

    async create(req, res) {
        const {
            startDate,
            endDate,
            name,
            description,
            tagId
        } = req.body;

        if(!startDate)
		 	return res.send({ success: false, error: 'Missing start date' });
        if(!endDate)
		 	return res.send({ success: false, error: 'Missing end date' });
        if(!name)
		 	return res.send({ success: false, error: 'Missing name' });

             
        try {
            const event = {
                startDate,
                endDate,
                name,
                description,
                tagId,
                ownerId: req.user.id
            };

            const [id] = await knex('events').insert(event);

            return res.json({
                ...event,
                id
            });

        } catch (err) {
            console.log(err);
            return res.json({  success: false, error: err  });
        }
        
    },

    async update(req, res) {
        const { id } = req.params;
        
        const {
            startDate,
            endDate,
            name,
            description,
            tagId
        } = req.body;
            
        try {
            const event = {};
            if(startDate);
                event.startDate = startDate;
            if(endDate);
                event.endDate = endDate;
            if(name);
                event.name = name;
            if(description);
                event.description = description;
            if(tagId);
                event.tagId = tagId;
            
            const updated = await knex('events')
                .where('id', id)
                .update(event);

            if(updated == 0) {
                res.status(500).send({ success: false, error: `Event not found.` });
            }
            return res.status(201).json({
                ...event
            });
        } catch (e) {
            res.status(500).send({ success: false, error: e });
        }
    },

    async delete(req, res) {
        const { id } = req.params;

        try {
			const deleted = await knex('events')
				.where('id', id)
				.delete();

			if(deleted == 0) {
				return res.status(500).send({ success: false, error: `Event not found.` });
			}

			return res.status(201).json({ success: true });
		} catch (e) {
			return res.status(500).send({ success: false, error: e });
		}

    }
}