const { Client } = require('pg');

async function check() {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_jZe8AXhN3bdR@ep-damp-thunder-adg38juh-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require&uselibpqcompat=true'
  });
  await client.connect();
  
  // List all tables
  const tables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
  console.log("Existing Tables:", tables.rows.map(r => r.table_name));
  
  // Try to find if data exists in CityProgress or cities_table
  try {
    const cityRes = await client.query("SELECT count(*) FROM \"CityProgress\"");
    console.log("Count in CityProgress:", cityRes.rows[0].count);
  } catch(e) { console.log("Table CityProgress not found or error."); }
  
  try {
    const tableRes = await client.query("SELECT count(*) FROM cities_table");
    console.log("Count in cities_table:", tableRes.rows[0].count);
  } catch(e) { console.log("Table cities_table not found or error."); }
  
  await client.end();
}

check().catch(console.error);
