shouldComponentUpdate on no input
  ...running...    Old:   266,324   276,116   286,655 ops/sec
  New:   178,468   182,887   187,531 ops/sec
  compare: 1 1
  diff: -33.77%
  rme: 3.13%
shouldComponentUpdate when cursors are same
  ...running...    Old:    15,285    15,863    16,486 ops/sec
  New:    16,855    18,018    19,355 ops/sec
  compare: 1 1
  diff: 13.58%
  rme: 5.56%
shouldComponentUpdate when cursors are different
  ...running...    Old:     9,388     9,743    10,126 ops/sec
  New:     9,033     9,380     9,756 ops/sec
  compare: 1 1
  diff: -3.73%
  rme: 3.81%
shouldComponentUpdate when immutables are same
  ...running...    Old:    18,039    18,704    19,421 ops/sec
  New:    20,795    21,589    22,446 ops/sec
  compare: 1 1
  diff: 15.41%
  rme: 3.75%
shouldComponentUpdate when many immutables are passed as the same reference
  ...running...    Old:       272       286       301 ops/sec
  New:       277       289       302 ops/sec
  compare: 0 0
  diff: 1.02%
  rme: 4.62%
shouldComponentUpdate when large object is passed
  ...running...    Old:    15,255    15,515    15,784 ops/sec
  New:    15,407    15,806    16,227 ops/sec
  compare: 1 1
  diff: 1.87%
  rme: 2.19%
shouldComponentUpdate when two large object is passed
  ...running...    Old:       689       703       718 ops/sec
  New:     1,325     1,351     1,379 ops/sec
  compare: 1 1
  diff: 92.09%
  rme: 2.04%
shouldComponentUpdate when two large object is passed but as same input
  ...running...    Old:     1,580     1,619     1,659 ops/sec
  New:    19,144    19,559    19,993 ops/sec
  compare: 1 1
  diff: 1108.04%
  rme: 2.3%
shouldComponentUpdate when immutables are different
  ...running...    Old:    11,127    11,550    12,007 ops/sec
  New:    11,387    11,810    12,267 ops/sec
  compare: 1 1
  diff: 2.25%
  rme: 3.76%
shouldComponentUpdate when long arrays (1000 elements) are the same
  ...running...    Old:       518       530       543 ops/sec
  New:     1,493     1,526     1,560 ops/sec
  compare: 1 1
  diff: 187.63%
  rme: 2.27%
shouldComponentUpdate when long arrays (1000 elements) are the same reference
  ...running...    Old:     3,163     3,241     3,324 ops/sec
  New:     3,211     3,279     3,349 ops/sec
  compare: 0 0
  diff: 1.15%
  rme: 2.29%
shouldComponentUpdate when same input is passed (long array, 1000 items)
  ...running...    Old:     3,129     3,214     3,304 ops/sec
  New:     3,299     3,396     3,499 ops/sec
  compare: 1 1
  diff: 5.66%
  rme: 2.83%
all done
