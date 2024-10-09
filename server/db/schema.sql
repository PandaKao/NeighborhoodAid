DROP DATABASE IF EXISTS neighborhoodaid_db;
CREATE DATABASE neighborhoodaid_db;

\c neighborhoodaid_db;
-- need this extension for geometry for longitude/latitude
CREATE EXTENSION IF NOT EXISTS postgis;