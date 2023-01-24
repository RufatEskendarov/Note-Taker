// required packages and assignments
const express = require("express");
const fs = require("fs");
const path = require("path");
const notesDb = require("./db/db.json");
const PORT = process.env.PORT || 3001;
const app = express();
