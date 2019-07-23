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
