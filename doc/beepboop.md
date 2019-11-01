# Beep Boop Generator Documentation

## Functions {

### numRange
####  Inputs:
  -num (integer)
#### Outputs:
  -range (array)
###### Variables:
- range
  * type: array[int]
  * purpose: Stores output during processing

logic:
  Takes num, and produces an array of integers with the bounds, [0,num];
##### Sample
```
input: 5
output: [0,1,2,3,4,5]
```
-=-=-=-=-=-=-=-=-=-=-=-=-=
### boopQuery
#### Inputs:
  -num (integer)
#### Outputs:
  -num (integer)
###### Variables:

- biip
  * type: int
  * Goal: stores output during processing

logic:
Takes num, returns highest integer within num, up to 3. Returns 0 if 1-3 are not found.
##### Sample
```
3 >> 3
35 >> 3
13 >> 3
11 >> 1
55 >> 0
```

## }
