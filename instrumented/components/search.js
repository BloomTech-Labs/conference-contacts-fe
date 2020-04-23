function cov_9mx5h52la() {
  var path = "E:\\projects\\lambdaschool\\labs\\frontend\\src\\components\\search.js";
  var hash = "0535b95646f2392cbd9202a19055d3f8f3e0b8f0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\projects\\lambdaschool\\labs\\frontend\\src\\components\\search.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 49
        }
      },
      "1": {
        start: {
          line: 8,
          column: 38
        },
        end: {
          line: 8,
          column: 48
        }
      },
      "2": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "3": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 49
        }
      },
      "4": {
        start: {
          line: 11,
          column: 41
        },
        end: {
          line: 11,
          column: 48
        }
      },
      "5": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 25
          }
        },
        loc: {
          start: {
            line: 6,
            column: 58
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 22
          },
          end: {
            line: 10,
            column: 23
          }
        },
        loc: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 33
          },
          end: {
            line: 11,
            column: 34
          }
        },
        loc: {
          start: {
            line: 11,
            column: 41
          },
          end: {
            line: 11,
            column: 48
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0535b95646f2392cbd9202a19055d3f8f3e0b8f0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_9mx5h52la = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_9mx5h52la();
import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { GET_USER_CONNECTIONS } from '../queries/index';
export default Search = ({
  fields,
  setFields,
  refetch
}) => {
  cov_9mx5h52la().f[0]++;
  const {
    data
  } = (cov_9mx5h52la().s[0]++, useQuery(GET_USER_CONNECTIONS));
  const {
    lastChanged,
    setChanged
  } = (cov_9mx5h52la().s[1]++, useState());
  cov_9mx5h52la().s[2]++;

  const makeArray = data => {
    cov_9mx5h52la().f[1]++;
    let ids = (cov_9mx5h52la().s[3]++, data.users.map(user => {
      cov_9mx5h52la().f[2]++;
      cov_9mx5h52la().s[4]++;
      return user.id;
    }));
    cov_9mx5h52la().s[5]++;
    refetch({ ...fields,
      ids
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUXVlcnkiLCJ1c2VMYXp5UXVlcnkiLCJncWwiLCJHRVRfVVNFUl9DT05ORUNUSU9OUyIsIlNlYXJjaCIsImZpZWxkcyIsInNldEZpZWxkcyIsInJlZmV0Y2giLCJkYXRhIiwibGFzdENoYW5nZWQiLCJzZXRDaGFuZ2VkIiwibWFrZUFycmF5IiwiaWRzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLEVBQTBCQyxTQUExQixRQUEyQyxPQUEzQztBQUNBLFNBQVNDLFFBQVQsRUFBbUJDLFlBQW5CLFFBQXVDLHFCQUF2QztBQUNBLFNBQVNDLEdBQVQsUUFBb0IsY0FBcEI7QUFDQSxTQUFTQyxvQkFBVCxRQUFxQyxrQkFBckM7QUFFQSxlQUFlQyxNQUFNLEdBQUcsQ0FBQztBQUFDQyxFQUFBQSxNQUFEO0FBQVNDLEVBQUFBLFNBQVQ7QUFBb0JDLEVBQUFBO0FBQXBCLENBQUQsS0FBa0M7QUFBQTtBQUN0RCxRQUFNO0FBQUNDLElBQUFBO0FBQUQsK0JBQVNSLFFBQVEsQ0FBQ0csb0JBQUQsQ0FBakIsQ0FBTjtBQUNBLFFBQU07QUFBQ00sSUFBQUEsV0FBRDtBQUFjQyxJQUFBQTtBQUFkLCtCQUE0QlosUUFBUSxFQUFwQyxDQUFOO0FBRnNEOztBQUl0RCxRQUFNYSxTQUFTLEdBQUdILElBQUksSUFBSTtBQUFBO0FBQ3RCLFFBQUlJLEdBQUcsNEJBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxHQUFYLENBQWVDLElBQUksSUFBSTtBQUFBO0FBQUE7QUFBQSxhQUFBQSxJQUFJLENBQUNDLEVBQUw7QUFBTyxLQUE5QixDQUFILENBQVA7QUFEc0I7QUFFdEJULElBQUFBLE9BQU8sQ0FBQyxFQUFFLEdBQUdGLE1BQUw7QUFBYU8sTUFBQUE7QUFBYixLQUFELENBQVA7QUFDSCxHQUhEO0FBTUgsQ0FWRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcbmltcG9ydCB7IEdFVF9VU0VSX0NPTk5FQ1RJT05TIH0gZnJvbSAnLi4vcXVlcmllcy9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2ggPSAoe2ZpZWxkcywgc2V0RmllbGRzLCByZWZldGNofSkgPT4ge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gdXNlUXVlcnkoR0VUX1VTRVJfQ09OTkVDVElPTlMpO1xyXG4gICAgY29uc3Qge2xhc3RDaGFuZ2VkLCBzZXRDaGFuZ2VkfSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgbWFrZUFycmF5ID0gZGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IGlkcyA9IGRhdGEudXNlcnMubWFwKHVzZXIgPT4gdXNlci5pZCk7XHJcbiAgICAgICAgcmVmZXRjaCh7IC4uLmZpZWxkcywgaWRzIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBcclxufSJdfQ==