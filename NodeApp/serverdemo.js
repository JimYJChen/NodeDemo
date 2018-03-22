const express = require('express');
const expressstatic = require('express-static');
const http = require('http');
const urllib = require('url');
const util = require('util');
const querystrq = require('querystring');
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const parseString = require('xml2js').parseString;
const bodyparser = require('body-parser');
const xmlreader = require("xmlreader");
const fastxmlparser = require('fast-xml-parser');
const mongodb = require("mongodb").MongoClient;

