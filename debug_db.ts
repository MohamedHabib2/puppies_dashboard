import { Pool } from 'pg';

async function checkTables() {
  const url = process.env.DATABASE_URL;
  if (!url) return;
  const pool = new Pool({ connectionString: url });
  const res = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
  console.log("Tables in database:", res.rows.map(r => r.table_name));
  
  const citiesCount = await pool.query("SELECT count(*) FROM cities_table");
  console.log("Count in cities_table:", citiesCount.rows[0].count);
  
  const contactMsgCount = await pool.query("SELECT count(*) FROM \"ContactMessage\"");
  console.log("Count in ContactMessage:", contactMsgCount.rows[0].count);

  await pool.end();
}

checkTables().catch(console.error);
