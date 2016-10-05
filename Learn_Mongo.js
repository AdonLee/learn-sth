/* eslint-disable*/
ul.count();
ul.findOne(where, mask);       // return an document, just find with limit 1
ul.find(where, mask, options) // returns a cursor to the retrieved documents
  .limit(int)
  .skip(int)
  .sort({key: [1|-1]})
  .count() // ignors skip and limit
  .size();  // honor skip and limit

ul.remove(where, justOne:Boolean);
ul.update(where, operation|document, options):WriteResult;

mask = {
    field: 0, // exclude
    field.subfield:  1, // include
    arrField: {
      $slice: 2 // just first two elements
      $eleMatch: where // retrun the first matching element in arrField
    }
}

operation = {
  $set: {
    field: newVal,
    field.subField: newVal,
  }
}

options = {
  multi: Boolean, // Update multiple documents
  upsert: Boolean // insert when no matching document
}

where = {
  field: {
    // element
    $type: [int|number....]
    $exists: boolean,
    // comparison
    $lte?: number,
    $gte?: number,
    $eq: variant,
    $ne: variant,
    $n?in: [val1, val2, ...valn],
    // logical
    $and: {},
    $or: {},
    $not: {},
    $nor: {}
    // evaluate
    $inc: {field: number}
    $mod: [ divisor, remainder ]  // value/divisor == remainder, fewer or more elements will raise error
    $regex: RegExp      // Regexp.test(value), PCRE
    $text: {
      $search: String,
      $language: String,
      $caseSensitive: Boolean,
      $diacriticSensitive: Boolean
    }
    $where: Function|expressionString
  }
}

// insert
// Insert a Document
ul.insert(document):WriteResult;
// Insert an Array of Documents
ul.insert([document]):BulkWriteResult;
// Insert Multiple Documents with Bulk
ul.initializeUnorderedBulkOp();
bulk = ul.initializeOrderedBulkOp(); // returns an unordered operations builder which maintains a list of operations to perform.
bulk.insert(a:document)
bulk.insert(b:document)
bulk.execute():BulkWriteResult;

ul.findAndModify({
    query: <document>,
    sort: <document>,       // provide some measure of control on which document to update.
    remove: false,          // remove and return the matching document, ignor option new
    update: <document>,
    upsert: false,      // Optional. Used in conjunction with the update field.
    new: false,         // return the modified document or the pre-modification
    fields: <document>,
    bypassDocumentValidation: <boolean>,
    writeConcern: <document>
});

ul.save(docSave, writeConcern:document):WriteResult; // docSave._id in ul ? update : insert
ul.distinct(field, where):Array // return distinct value of field, array field will be joined

ul.aggregate(stages);
stages = [
  {$match: where},
  {$limit: number},
  {$skip: number},
  {$sample: {size:number}}, // Randomly return selects the specified number of documents
  {$sort: number},
  {$project: project}, // Reshapes each document in the stream
  {$group:},
  {$out: "output-collection"} // insert into another collection
];

project = mask.extend({
  field: "$otherField",
  field: {
    $slice: ["$otherField", 0, 1],
    $concat: "$otherField[.subfield]",
    $toLower: "$otherField[.subfield]",
    $toUpper: "$otherField[.subfield]",
    $push: "$otherField[.subfield]"
  },
});

ul.convertToCapped();
ul.convertToSingleObject();
ul.copyTo();
ul.createIndex();
ul.diskStorageStats();
ul.drop();
ul.dropIndex();
ul.dropIndexes();
ul.ensureIndex();
ul.exists();
ul.explain();
ul.getCollection();
ul.getDB();
ul.getDiskStorageStats();
ul.getName();
ul.getFullName();
ul.getIndexes();
ul.getIndexKeys();
ul.getIndexSpecs();
ul.getIndexStats();
ul.getIndices();
ul.getMongo();
ul.getPagesInRAM();
ul.getPlanCache();
ul.getQueryOptions();
ul.getShardDistribution();
ul.getShardVersion();
ul.getSlaveOk();
ul.getSplitKeysForChunks();
ul.getWriteConcern();
ul.group();
ul.groupcmd();
ul.hashAllDocs();
ul.hasOwnProperty();
ul.help();
ul.indexStats();
ul.isCapped();
ul.mapReduce();
ul.pagesInRAM();
ul.propertyIsEnumerable();
ul.reIndex();
ul.renameCollection();
ul.runCommand();
ul.setSlaveOk();
ul.setWriteConcern();
ul.shellPrint();
ul.stats();
ul[data|storage|total|totalIndex + 'Size']();
ul.tojson();
ul.unsetWriteConcern();
ul.validate();
ul.verify();
ul.valueOf();
ul.toLocaleString();
ul.toString();
ul.prototype;
ul.constructor ;


	db.user_list.find().help() - show DBCursor help
	db.user_list.count()
	db.user_list.copyTo(newColl) - duplicates collection by copying all documents to newColl; no indexes are copied.
	db.user_list.convertToCapped(maxBytes) - calls {convertToCapped:'user_list', size:maxBytes}} command
	db.user_list.dataSize()
	db.user_list.distinct( key ) - e.g. db.user_list.distinct( 'x' )
	db.user_list.drop() drop the collection
	db.user_list.dropIndex(index) - e.g. db.user_list.dropIndex( "indexName" ) or db.user_list.dropIndex( { "indexKey" : 1 } )
	db.user_list.dropIndexes()
	db.user_list.ensureIndex(keypattern[,options])
	db.user_list.explain().help() - show explain help
	db.user_list.reIndex()
	db.user_list.find([query],[fields]) - query is an optional query filter. fields is optional set of fields to return.
	                                              e.g. db.user_list.find( {x:77} , {name:1, x:1} )
	db.user_list.find(...).count()
	db.user_list.find(...).limit(n)
	db.user_list.find(...).skip(n)
	db.user_list.find(...).sort(...)
	db.user_list.findOne([query])
	db.user_list.findAndModify( { update : ... , remove : bool [, query: {}, sort: {}, 'new': false] } )
	db.user_list.getDB() get DB object associated with collection
	db.user_list.getPlanCache() get query plan cache associated with collection
	db.user_list.getIndexes()
	db.user_list.group( { key : ..., initial: ..., reduce : ...[, cond: ...] } )
	db.user_list.insert(obj)
	db.user_list.mapReduce( mapFunction , reduceFunction , <optional params> )
	db.user_list.aggregate( [pipeline], <optional params> ) - performs an aggregation on a collection; returns a cursor
	db.user_list.remove(query)
	db.user_list.renameCollection( newName , <dropTarget> ) renames the collection.
	db.user_list.runCommand( name , <options> ) runs a db command with the given name where the first param is the collection name
	db.user_list.save(obj)
	db.user_list.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
	db.user_list.totalIndexSize() - size in bytes of all the indexes
	db.user_list.totalSize() - storage allocated for all data and indexes
	db.user_list.storageSize() - includes free space allocated to this collection
	db.user_list.update(query, object[, upsert_bool, multi_bool]) - instead of two flags, you can pass an object with fields: upsert, multi
	db.user_list.validate( <full> ) - SLOW
	db.user_list.getShardVersion() - only for use with sharding
	db.user_list.getShardDistribution() - prints statistics about data distribution in the cluster
	db.user_list.getSplitKeysForChunks( <maxChunkSize> ) - calculates split points over all chunks and returns splitter function
	db.user_list.getWriteConcern() - returns the write concern used for any operations on this collection, inherited from server/db if set
	db.user_list.setWriteConcern( <write concern doc> ) - sets the write concern for writes to the collection
	db.user_list.unsetWriteConcern( <write concern doc> ) - unsets the write concern for writes to the collection
