BEGIN;

INSERT INTO cohorts (name, location) VALUES
  ('The Lord of the Rings', ''),
  ('10', 'Bethnal Green'),
  ('N2', 'Nazareth'),
  ('13', 'Bethnal Green'),
  ('14', 'Finsbury Park'),
  ('15', 'Finsbury Park'),
  ('16', 'Finsbury Park'),
  ('17', 'Finsbury Park')
ON CONFLICT DO NOTHING;