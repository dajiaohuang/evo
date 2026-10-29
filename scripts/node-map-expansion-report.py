#!/usr/bin/env python3
import collections,json,sqlite3,sys
from pathlib import Path
base=Path('.git/platform-v2/local/node-map-expansion')
db=sqlite3.connect(sys.argv[1]); l=json.loads((Path(sys.argv[2])/'ledger.json').read_bytes())
state=json.loads((base/'taxa/state.json').read_bytes())
print(json.dumps({'ledgerReasons':dict(collections.Counter(x.get('reason','conflict') for x in l['entries'])),
 'distinctIdentifiedTaxa':db.execute('SELECT count(distinct node_id) FROM map_occurrence').fetchone()[0],
 'withReferenceId':db.execute('SELECT count(*) FROM map_occurrence_evidence_detail WHERE reference_id IS NOT NULL AND reference_id<>\'\'').fetchone()[0],
 'withOriginalIdentifiedName':db.execute('SELECT count(*) FROM map_occurrence_evidence_detail WHERE identified_name IS NOT NULL AND identified_name<>\'\'').fetchone()[0],
 'sourceMemberships':db.execute('SELECT count(*) FROM map_occurrence_source_membership').fetchone()[0],
 'distinctReconstructedOccurrences':db.execute("SELECT count(distinct occurrence_id) FROM map_occurrence_position WHERE status='ready'").fetchone()[0],
 'taxaRequested':len(state['attempted']),'taxaReturned':len(state['returned']),
 'taxaUnreturned':len(set(state['attempted'])-set(state['returned']))},sort_keys=True))
