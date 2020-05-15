import Airtable from 'airtable';

export default new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY });
