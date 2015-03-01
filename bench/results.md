shouldComponentUpdate on no input
  ...running...    Old:   124,118   131,889   140,698 ops/sec
  New:  Infinity  Infinity  Infinity ops/sec
  compare: 0 0
  diff: Infinity%
  rme: 4.42%
shouldComponentUpdate when immutables are same
  ...running...    Old:    57,000    58,763    60,640 ops/sec
  New:    69,822    72,447    75,278 ops/sec
  compare: 1 1
  diff: 23.28%
  rme: 3.44%
shouldComponentUpdate when many immutables are passed as the same reference
  ...running...    Old:     7,508     7,756     8,020 ops/sec
  New:     7,369     7,650     7,953 ops/sec
  compare: 0 0
  diff: -1.37%
  rme: 3.56%
shouldComponentUpdate when large object is passed
  ...running...    Old:    10,122    10,651    11,238 ops/sec
  New:    10,484    10,868    11,281 ops/sec
  compare: 1 1
  diff: 2.04%
  rme: 4.51%
shouldComponentUpdate when two large object is passed
  ...running...    Old:       647       674       703 ops/sec
  New:       837       848       860 ops/sec
  compare: 1 1
  diff: 25.89%
  rme: 3.07%
shouldComponentUpdate when two large object is passed but as same input
  ...running...    Old:     1,041     1,086     1,135 ops/sec
  New:    12,600    13,133    13,714 ops/sec
  compare: 1 1
  diff: 1109.2%
  rme: 4.27%
shouldComponentUpdate when immutables are different
  ...running...    Old:    31,740    32,338    32,960 ops/sec
  New:    36,788    37,453    38,142 ops/sec
  compare: 1 1
  diff: 15.81%
  rme: 1.84%
shouldComponentUpdate when long arrays (1000 elements) are the same
  ...running...    Old:       584       592       601 ops/sec
  New:     2,271     2,310     2,350 ops/sec
  compare: 1 1
  diff: 289.71%
  rme: 1.57%
shouldComponentUpdate when long arrays (1000 elements) are the same reference
  ...running...    Old:     4,857     4,910     4,964 ops/sec
  New:     4,766     4,844     4,924 ops/sec
  compare: 0 0
  diff: -1.36%
  rme: 1.38%
shouldComponentUpdate when same input is passed (long array, 1000 items)
  ...running...    Old:     4,790     4,888     4,991 ops/sec
  New:     5,262     5,359     5,460 ops/sec
  compare: 1 1
  diff: 9.63%
  rme: 1.95%
all done
