// Synthetic durability test only; the parent owns and terminates this exact PID.
import {openTurso} from './turso-store.mjs'
import {createServer} from 'node:net'
const db=await openTurso(process.argv[2])
await db.exec('BEGIN IMMEDIATE')
await db.prepare('INSERT INTO content_node(id,kind) VALUES(?,?)').run(process.argv[3],'synthetic-crash-only')
const hold=createServer();hold.listen(0,'127.0.0.1',()=>console.log('uncommitted-ready'))
