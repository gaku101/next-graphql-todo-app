"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// asset-input/lambda/deleteTodo.ts
var deleteTodo_exports = {};
__export(deleteTodo_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(deleteTodo_exports);
var import_aws_sdk = require("aws-sdk");
var docClient = new import_aws_sdk.DynamoDB.DocumentClient();
var handler = async (event) => {
  const id = event.arguments.id;
  try {
    if (!process.env.TODO_TABLE) {
      console.log("TODO_TABLE was not specified");
      return null;
    }
    await docClient.delete({
      TableName: process.env.TODO_TABLE,
      Key: { id }
    }).promise();
    return true;
  } catch (err) {
    console.error(`DynamoDB error: ${err}`);
    return null;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
