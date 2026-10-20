-- Reuse the existing idempotency ledger instead of creating another receipt table.
-- Existing page/channel functions and all immutable historical rows stay valid.
ALTER TABLE evo_v2.page_write_receipt DROP CONSTRAINT page_write_receipt_operation_check;
ALTER TABLE evo_v2.page_write_receipt ADD CONSTRAINT page_write_receipt_operation_check
CHECK(operation IN ('draft','channel','node-draft'));
