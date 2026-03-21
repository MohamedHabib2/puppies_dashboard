import { defineConfig } from 'prisma/config';

export default defineConfig({
  datasource: {
    url: 'postgresql://neondb_owner:npg_jZe8AXhN3bdR@ep-damp-thunder-adg38juh-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require&uselibpqcompat=true'
  }
});

