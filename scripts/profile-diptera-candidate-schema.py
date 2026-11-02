import sqlite3

db = sqlite3.connect('file:.git/evo-wikipedia-col26-8/inventory.sqlite?mode=ro', uri=True)
try:
    for row in db.execute('PRAGMA table_info(diptera_synonym_candidates)'):
        print(row)
finally:
    db.close()
