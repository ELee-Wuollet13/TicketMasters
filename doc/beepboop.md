# Beep Boop Generator Documentation

## Functions {

### numRange
####  Inputs:
  -num (integer)
  -reverse (boolean)
#### Outputs:
  -range (array)
###### Variables:
- range
  * type: array[int]
  * purpose: Stores output during processing

logic:
  Takes num, and produces an array of integers with the bounds, [0,num];
  If reverse is true, it reverses the range array before returning it.
##### Sample
```
input: 5, false
output: [0,1,2,3,4,5]
input: 5, true
output: [5,4,3,2,1,0]
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
