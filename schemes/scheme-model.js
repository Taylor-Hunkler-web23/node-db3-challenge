const db = require('../data/db-config.js')

module.exports ={
    find,
    findById,
  findSteps,
    add,
    remove,
    update
}


// find():
// Calling find returns a promise that resolves to an array of all schemes in the database.
// No steps are included.

function find () {
    return db("schemes")
}



// findById(id):
// Expects a scheme id as its only parameter.
// Resolve to a single scheme object.
// On an invalid id, resolves to null.

function findById(id) {
    return db('schemes')
    .where({id})
    .first()
}


// findSteps(id):
// Expects a scheme id.
// Resolves to an array of all correctly ordered step for the given scheme: [ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ].
// This array should include the scheme_name not the scheme_id.

// select schemes.scheme_name, steps.step_number, steps.instructions from steps
// join schemes on steps.scheme_id = schemes.id
// order by steps.step_number;

function findSteps(id) {
    
}


// add(scheme):
// Expects a scheme object.
// Inserts scheme into the database.
// Resolves to the newly inserted scheme, including id.

function add (scheme) {
    return db('schemes')
    .insert(scheme)
    .then(id => {
        return findById (id[0]);
    })
   

}

// update(changes, id):
// Expects a changes object and an id.
// Updates the scheme with the given id.
// Resolves to the newly updated scheme object.

function update(changes, id) {
    return db('schemes')
    .update(changes)
      .where({ id })
      .then ((resolve) =>{
          return changes
      })
      
     
      
  }


// remove(id):
// Removes the scheme object with the provided id.
// Resolves to the removed scheme
// Resolves to null on an invalid id.
// (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)


function remove(id) {
    return db('schemes')
      .where('id', id)
      .del();
  }

