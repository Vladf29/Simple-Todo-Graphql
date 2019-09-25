const fs = require("fs");

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

require("dotenv").config();

const resolvers = require("./resolvers");
const typeDefs = fs.readFileSync("./schema/schema.graphql").toString();

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT }, () => console.log("running"));
 
//Test Code 1

var list = ["Test", "Test1", "test2"];
var tmp = list.findIndex(x => x== "test2");
var tmp2 = list.find(x => x == "Test1");


//Test Code 2

function make_id(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 var strTmp = Make_id(12);