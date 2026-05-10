# TASK

You are given a filterPersons function that filters users based on their type (user or admin). Your task is to:

## Fix the typings for the filterPersons function so that:

- It returns User[] when personType is 'user'.
- It returns Admin[] when personType is 'admin'.
- The function should accept partial User or Admin types based on the personType argument. For example:
  - If personType is 'user', the criteria argument should accept a partial User object.
  - If personType is 'admin', the criteria argument should accept a partial Admin object.
- The criteria object should exclude the type field (i.e., you should not allow filtering by the type property).
