function cov_q43gn2gfy() {
  var path = "E:\\projects\\lambdaschool\\labs\\frontend\\src\\queries\\index.js";
  var hash = "fa51c16f7df29179bd5203c8e24b060a2307d8e4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\projects\\lambdaschool\\labs\\frontend\\src\\queries\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 33
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 29
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 25,
          column: 33
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "3": {
        start: {
          line: 50,
          column: 32
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "4": {
        start: {
          line: 71,
          column: 36
        },
        end: {
          line: 86,
          column: 1
        }
      },
      "5": {
        start: {
          line: 88,
          column: 36
        },
        end: {
          line: 103,
          column: 1
        }
      },
      "6": {
        start: {
          line: 105,
          column: 36
        },
        end: {
          line: 116,
          column: 1
        }
      },
      "7": {
        start: {
          line: 118,
          column: 31
        },
        end: {
          line: 163,
          column: 1
        }
      },
      "8": {
        start: {
          line: 165,
          column: 36
        },
        end: {
          line: 175,
          column: 1
        }
      },
      "9": {
        start: {
          line: 177,
          column: 33
        },
        end: {
          line: 200,
          column: 1
        }
      },
      "10": {
        start: {
          line: 202,
          column: 33
        },
        end: {
          line: 212,
          column: 1
        }
      },
      "11": {
        start: {
          line: 214,
          column: 34
        },
        end: {
          line: 235,
          column: 1
        }
      },
      "12": {
        start: {
          line: 237,
          column: 30
        },
        end: {
          line: 245,
          column: 1
        }
      },
      "13": {
        start: {
          line: 247,
          column: 36
        },
        end: {
          line: 329,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fa51c16f7df29179bd5203c8e24b060a2307d8e4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_q43gn2gfy = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_q43gn2gfy();
import gql from 'graphql-tag';
export const FETCH_QRCODE_DATA = (cov_q43gn2gfy().s[0]++, gql`
	query FetchQRCodeData($id: ID!) {
		qrcode(id: $id) {
			id
			user {
				id
			}
		}
	}
`);
export const CREATE_QRCODE = (cov_q43gn2gfy().s[1]++, gql`
	mutation createQRCode($label: String!) {
		createQRCode(label: $label) {
			qrcode {
				id
				label
			}
		}
	}
`);
export const CREATE_CONNECTION = (cov_q43gn2gfy().s[2]++, gql`
	mutation createConnection($userID: ID!, $senderCoords: CoordinatesInput!) {
		createConnection(userID: $userID, senderCoords: $senderCoords) {
			success
			message
			connection {
				id
				location
				sender {
					id
					name
					picture
					industry
				}
				receiver {
					id
					name
					picture
					industry
				}
			}
		}
	}
`);
export const UPDATE_USER_INFO = (cov_q43gn2gfy().s[3]++, gql`
	mutation updateUser($data: UpdateUserInput!) {
		updateUser(data: $data) {
			code
			success
			message
			user {
				id
				name
				picture
				birthdate
				location
				industry
				jobtitle
				tagline
				bio
			}
		}
	}
`);
export const CREATE_PROFILE_FIELD = (cov_q43gn2gfy().s[4]++, gql`
	mutation createProfileField($data: CreateProfileFieldInput!) {
		createProfileField(data: $data) {
			code
			success
			message
			profileField {
				id
				type
				value
				privacy
				preferredContact
			}
		}
	}
`);
export const UPDATE_PROFILE_FIELD = (cov_q43gn2gfy().s[5]++, gql`
	mutation updateProfileField($id: ID!, $data: UpdateProfileFieldInput!) {
		updateProfileField(id: $id, data: $data) {
			code
			success
			message
			profileField {
				id
				type
				value
				privacy
				preferredContact
			}
		}
	}
`);
export const DELETE_PROFILE_FIELD = (cov_q43gn2gfy().s[6]++, gql`
	mutation deleteProfileField($id: ID!) {
		deleteProfileField(id: $id) {
			code
			success
			message
			profileField {
				id
			}
		}
	}
`);
export const FETCH_HOME_USER = (cov_q43gn2gfy().s[7]++, gql`
	query FetchHomeUser {
		user {
			id
			name
			picture
			notifications {
				id
				message
			}
			receivedConnections {
				id
				location
				status
				sender {
					id
					name
					picture
					industry
				}
				receiver {
					id
					name
					picture
					industry
				}
			}
			connections {
				id
				location
				sender {
					id
					name
					picture
					industry
				}
				receiver {
					id
					name
					picture
					industry
				}
			}
		}
	}
`);
export const DISMISS_NOTIFICATION = (cov_q43gn2gfy().s[8]++, gql`
	mutation DismissNotification($id: ID!) {
		deleteNotification(id: $id) {
			success
			message
			notification {
				id
			}
		}
	}
`);
export const ACCEPT_CONNECTION = (cov_q43gn2gfy().s[9]++, gql`
	mutation AcceptConnection($id: ID!, $receiverCoords: CoordinatesInput!) {
		acceptConnection(id: $id, receiverCoords: $receiverCoords) {
			success
			message
			connection {
				id
				location
				sender {
					id
					name
					picture
					industry
				}
				receiver {
					id
					name
					picture
					industry
				}
			}
		}
	}
`);
export const DELETE_CONNECTION = (cov_q43gn2gfy().s[10]++, gql`
	mutation DeleteConnection($id: ID!) {
		deleteConnection(id: $id) {
			success
			message
			connection {
				id
			}
		}
	}
`);
export const FETCH_USER_PROFILE = (cov_q43gn2gfy().s[11]++, gql`
	query FetchUserProfile($id: ID) {
		user(id: $id) {
			id
			name
			picture
			birthdate
			location
			industry
			jobtitle
			tagline
			bio
			profile {
				id
				value
				type
				privacy
				preferredContact
			}
		}
	}
`);
export const NAVBAR_PROFILE = (cov_q43gn2gfy().s[12]++, gql`
	query FetchNavbarProfile {
		user {
			name
			picture
			id
		}
	}
`);
export const GET_USER_CONNECTIONS = (cov_q43gn2gfy().s[13]++, gql`
	query getUserConnections($id: ID) {
		user(id: $id) {
			id
			pendingConnections {
				id
				location
				sender {
					id
					name
					picture
					location
					industry
					jobtitle
					tagline
					bio
					profile {
						id
						value
						type
						privacy
						preferredContact
					}
				}
				receiver {
					id
					name
					picture
					location
					industry
					jobtitle
					tagline
					bio
					profile {
						id
						value
						type
						privacy
						preferredContact
					}
				}
			}
			connections {
				id
				location
				sender {
					id
					name
					picture
					location
					industry
					jobtitle
					tagline
					bio
					profile {
						id
						value
						type
						privacy
						preferredContact
					}
				}
				receiver {
					id
					name
					picture
					location
					industry
					jobtitle
					tagline
					bio
					profile {
						id
						value
						type
						privacy
						preferredContact
					}
				}
			}
		}
	}
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImdxbCIsIkZFVENIX1FSQ09ERV9EQVRBIiwiQ1JFQVRFX1FSQ09ERSIsIkNSRUFURV9DT05ORUNUSU9OIiwiVVBEQVRFX1VTRVJfSU5GTyIsIkNSRUFURV9QUk9GSUxFX0ZJRUxEIiwiVVBEQVRFX1BST0ZJTEVfRklFTEQiLCJERUxFVEVfUFJPRklMRV9GSUVMRCIsIkZFVENIX0hPTUVfVVNFUiIsIkRJU01JU1NfTk9USUZJQ0FUSU9OIiwiQUNDRVBUX0NPTk5FQ1RJT04iLCJERUxFVEVfQ09OTkVDVElPTiIsIkZFVENIX1VTRVJfUFJPRklMRSIsIk5BVkJBUl9QUk9GSUxFIiwiR0VUX1VTRVJfQ09OTkVDVElPTlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsR0FBUCxNQUFnQixhQUFoQjtBQUVBLE9BQU8sTUFBTUMsaUJBQWlCLDRCQUFHRCxHQUFJOzs7Ozs7Ozs7Q0FBUCxDQUF2QjtBQVdQLE9BQU8sTUFBTUUsYUFBYSw0QkFBR0YsR0FBSTs7Ozs7Ozs7O0NBQVAsQ0FBbkI7QUFXUCxPQUFPLE1BQU1HLGlCQUFpQiw0QkFBR0gsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBUCxDQUF2QjtBQXlCUCxPQUFPLE1BQU1JLGdCQUFnQiw0QkFBR0osR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFQLENBQXRCO0FBcUJQLE9BQU8sTUFBTUssb0JBQW9CLDRCQUFHTCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Q0FBUCxDQUExQjtBQWlCUCxPQUFPLE1BQU1NLG9CQUFvQiw0QkFBR04sR0FBSTs7Ozs7Ozs7Ozs7Ozs7O0NBQVAsQ0FBMUI7QUFpQlAsT0FBTyxNQUFNTyxvQkFBb0IsNEJBQUdQLEdBQUk7Ozs7Ozs7Ozs7O0NBQVAsQ0FBMUI7QUFhUCxPQUFPLE1BQU1RLGVBQWUsNEJBQUdSLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFQLENBQXJCO0FBK0NQLE9BQU8sTUFBTVMsb0JBQW9CLDRCQUFHVCxHQUFJOzs7Ozs7Ozs7O0NBQVAsQ0FBMUI7QUFZUCxPQUFPLE1BQU1VLGlCQUFpQiw0QkFBR1YsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBUCxDQUF2QjtBQXlCUCxPQUFPLE1BQU1XLGlCQUFpQiw2QkFBR1gsR0FBSTs7Ozs7Ozs7OztDQUFQLENBQXZCO0FBWVAsT0FBTyxNQUFNWSxrQkFBa0IsNkJBQUdaLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFQLENBQXhCO0FBdUJQLE9BQU8sTUFBTWEsY0FBYyw2QkFBR2IsR0FBSTs7Ozs7Ozs7Q0FBUCxDQUFwQjtBQVVQLE9BQU8sTUFBTWMsb0JBQW9CLDZCQUFHZCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQVAsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCBjb25zdCBGRVRDSF9RUkNPREVfREFUQSA9IGdxbGBcclxuXHRxdWVyeSBGZXRjaFFSQ29kZURhdGEoJGlkOiBJRCEpIHtcclxuXHRcdHFyY29kZShpZDogJGlkKSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdHVzZXIge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1FSQ09ERSA9IGdxbGBcclxuXHRtdXRhdGlvbiBjcmVhdGVRUkNvZGUoJGxhYmVsOiBTdHJpbmchKSB7XHJcblx0XHRjcmVhdGVRUkNvZGUobGFiZWw6ICRsYWJlbCkge1xyXG5cdFx0XHRxcmNvZGUge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bGFiZWxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ09OTkVDVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBjcmVhdGVDb25uZWN0aW9uKCR1c2VySUQ6IElEISwgJHNlbmRlckNvb3JkczogQ29vcmRpbmF0ZXNJbnB1dCEpIHtcclxuXHRcdGNyZWF0ZUNvbm5lY3Rpb24odXNlcklEOiAkdXNlcklELCBzZW5kZXJDb29yZHM6ICRzZW5kZXJDb29yZHMpIHtcclxuXHRcdFx0c3VjY2Vzc1xyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHRcdGNvbm5lY3Rpb24ge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bG9jYXRpb25cclxuXHRcdFx0XHRzZW5kZXIge1xyXG5cdFx0XHRcdFx0aWRcclxuXHRcdFx0XHRcdG5hbWVcclxuXHRcdFx0XHRcdHBpY3R1cmVcclxuXHRcdFx0XHRcdGluZHVzdHJ5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlY2VpdmVyIHtcclxuXHRcdFx0XHRcdGlkXHJcblx0XHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0XHRwaWN0dXJlXHJcblx0XHRcdFx0XHRpbmR1c3RyeVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9JTkZPID0gZ3FsYFxyXG5cdG11dGF0aW9uIHVwZGF0ZVVzZXIoJGRhdGE6IFVwZGF0ZVVzZXJJbnB1dCEpIHtcclxuXHRcdHVwZGF0ZVVzZXIoZGF0YTogJGRhdGEpIHtcclxuXHRcdFx0Y29kZVxyXG5cdFx0XHRzdWNjZXNzXHJcblx0XHRcdG1lc3NhZ2VcclxuXHRcdFx0dXNlciB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0cGljdHVyZVxyXG5cdFx0XHRcdGJpcnRoZGF0ZVxyXG5cdFx0XHRcdGxvY2F0aW9uXHJcblx0XHRcdFx0aW5kdXN0cnlcclxuXHRcdFx0XHRqb2J0aXRsZVxyXG5cdFx0XHRcdHRhZ2xpbmVcclxuXHRcdFx0XHRiaW9cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUFJPRklMRV9GSUVMRCA9IGdxbGBcclxuXHRtdXRhdGlvbiBjcmVhdGVQcm9maWxlRmllbGQoJGRhdGE6IENyZWF0ZVByb2ZpbGVGaWVsZElucHV0ISkge1xyXG5cdFx0Y3JlYXRlUHJvZmlsZUZpZWxkKGRhdGE6ICRkYXRhKSB7XHJcblx0XHRcdGNvZGVcclxuXHRcdFx0c3VjY2Vzc1xyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHRcdHByb2ZpbGVGaWVsZCB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHR0eXBlXHJcblx0XHRcdFx0dmFsdWVcclxuXHRcdFx0XHRwcml2YWN5XHJcblx0XHRcdFx0cHJlZmVycmVkQ29udGFjdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFX0ZJRUxEID0gZ3FsYFxyXG5cdG11dGF0aW9uIHVwZGF0ZVByb2ZpbGVGaWVsZCgkaWQ6IElEISwgJGRhdGE6IFVwZGF0ZVByb2ZpbGVGaWVsZElucHV0ISkge1xyXG5cdFx0dXBkYXRlUHJvZmlsZUZpZWxkKGlkOiAkaWQsIGRhdGE6ICRkYXRhKSB7XHJcblx0XHRcdGNvZGVcclxuXHRcdFx0c3VjY2Vzc1xyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHRcdHByb2ZpbGVGaWVsZCB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHR0eXBlXHJcblx0XHRcdFx0dmFsdWVcclxuXHRcdFx0XHRwcml2YWN5XHJcblx0XHRcdFx0cHJlZmVycmVkQ29udGFjdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9GSUxFX0ZJRUxEID0gZ3FsYFxyXG5cdG11dGF0aW9uIGRlbGV0ZVByb2ZpbGVGaWVsZCgkaWQ6IElEISkge1xyXG5cdFx0ZGVsZXRlUHJvZmlsZUZpZWxkKGlkOiAkaWQpIHtcclxuXHRcdFx0Y29kZVxyXG5cdFx0XHRzdWNjZXNzXHJcblx0XHRcdG1lc3NhZ2VcclxuXHRcdFx0cHJvZmlsZUZpZWxkIHtcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZFVENIX0hPTUVfVVNFUiA9IGdxbGBcclxuXHRxdWVyeSBGZXRjaEhvbWVVc2VyIHtcclxuXHRcdHVzZXIge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdHBpY3R1cmVcclxuXHRcdFx0bm90aWZpY2F0aW9ucyB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRtZXNzYWdlXHJcblx0XHRcdH1cclxuXHRcdFx0cmVjZWl2ZWRDb25uZWN0aW9ucyB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRsb2NhdGlvblxyXG5cdFx0XHRcdHN0YXR1c1xyXG5cdFx0XHRcdHNlbmRlciB7XHJcblx0XHRcdFx0XHRpZFxyXG5cdFx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdFx0cGljdHVyZVxyXG5cdFx0XHRcdFx0aW5kdXN0cnlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVjZWl2ZXIge1xyXG5cdFx0XHRcdFx0aWRcclxuXHRcdFx0XHRcdG5hbWVcclxuXHRcdFx0XHRcdHBpY3R1cmVcclxuXHRcdFx0XHRcdGluZHVzdHJ5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbm5lY3Rpb25zIHtcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHRcdGxvY2F0aW9uXHJcblx0XHRcdFx0c2VuZGVyIHtcclxuXHRcdFx0XHRcdGlkXHJcblx0XHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0XHRwaWN0dXJlXHJcblx0XHRcdFx0XHRpbmR1c3RyeVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZWNlaXZlciB7XHJcblx0XHRcdFx0XHRpZFxyXG5cdFx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdFx0cGljdHVyZVxyXG5cdFx0XHRcdFx0aW5kdXN0cnlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRElTTUlTU19OT1RJRklDQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gRGlzbWlzc05vdGlmaWNhdGlvbigkaWQ6IElEISkge1xyXG5cdFx0ZGVsZXRlTm90aWZpY2F0aW9uKGlkOiAkaWQpIHtcclxuXHRcdFx0c3VjY2Vzc1xyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHRcdG5vdGlmaWNhdGlvbiB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBQ0NFUFRfQ09OTkVDVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBBY2NlcHRDb25uZWN0aW9uKCRpZDogSUQhLCAkcmVjZWl2ZXJDb29yZHM6IENvb3JkaW5hdGVzSW5wdXQhKSB7XHJcblx0XHRhY2NlcHRDb25uZWN0aW9uKGlkOiAkaWQsIHJlY2VpdmVyQ29vcmRzOiAkcmVjZWl2ZXJDb29yZHMpIHtcclxuXHRcdFx0c3VjY2Vzc1xyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHRcdGNvbm5lY3Rpb24ge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bG9jYXRpb25cclxuXHRcdFx0XHRzZW5kZXIge1xyXG5cdFx0XHRcdFx0aWRcclxuXHRcdFx0XHRcdG5hbWVcclxuXHRcdFx0XHRcdHBpY3R1cmVcclxuXHRcdFx0XHRcdGluZHVzdHJ5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlY2VpdmVyIHtcclxuXHRcdFx0XHRcdGlkXHJcblx0XHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0XHRwaWN0dXJlXHJcblx0XHRcdFx0XHRpbmR1c3RyeVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09OTkVDVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBEZWxldGVDb25uZWN0aW9uKCRpZDogSUQhKSB7XHJcblx0XHRkZWxldGVDb25uZWN0aW9uKGlkOiAkaWQpIHtcclxuXHRcdFx0c3VjY2Vzc1xyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHRcdGNvbm5lY3Rpb24ge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRkVUQ0hfVVNFUl9QUk9GSUxFID0gZ3FsYFxyXG5cdHF1ZXJ5IEZldGNoVXNlclByb2ZpbGUoJGlkOiBJRCkge1xyXG5cdFx0dXNlcihpZDogJGlkKSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0cGljdHVyZVxyXG5cdFx0XHRiaXJ0aGRhdGVcclxuXHRcdFx0bG9jYXRpb25cclxuXHRcdFx0aW5kdXN0cnlcclxuXHRcdFx0am9idGl0bGVcclxuXHRcdFx0dGFnbGluZVxyXG5cdFx0XHRiaW9cclxuXHRcdFx0cHJvZmlsZSB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdHR5cGVcclxuXHRcdFx0XHRwcml2YWN5XHJcblx0XHRcdFx0cHJlZmVycmVkQ29udGFjdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5BVkJBUl9QUk9GSUxFID0gZ3FsYFxyXG5cdHF1ZXJ5IEZldGNoTmF2YmFyUHJvZmlsZSB7XHJcblx0XHR1c2VyIHtcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRwaWN0dXJlXHJcblx0XHRcdGlkXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NPTk5FQ1RJT05TID0gZ3FsYFxyXG5cdHF1ZXJ5IGdldFVzZXJDb25uZWN0aW9ucygkaWQ6IElEKSB7XHJcblx0XHR1c2VyKGlkOiAkaWQpIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0cGVuZGluZ0Nvbm5lY3Rpb25zIHtcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHRcdGxvY2F0aW9uXHJcblx0XHRcdFx0c2VuZGVyIHtcclxuXHRcdFx0XHRcdGlkXHJcblx0XHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0XHRwaWN0dXJlXHJcblx0XHRcdFx0XHRsb2NhdGlvblxyXG5cdFx0XHRcdFx0aW5kdXN0cnlcclxuXHRcdFx0XHRcdGpvYnRpdGxlXHJcblx0XHRcdFx0XHR0YWdsaW5lXHJcblx0XHRcdFx0XHRiaW9cclxuXHRcdFx0XHRcdHByb2ZpbGUge1xyXG5cdFx0XHRcdFx0XHRpZFxyXG5cdFx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdFx0XHR0eXBlXHJcblx0XHRcdFx0XHRcdHByaXZhY3lcclxuXHRcdFx0XHRcdFx0cHJlZmVycmVkQ29udGFjdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZWNlaXZlciB7XHJcblx0XHRcdFx0XHRpZFxyXG5cdFx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdFx0cGljdHVyZVxyXG5cdFx0XHRcdFx0bG9jYXRpb25cclxuXHRcdFx0XHRcdGluZHVzdHJ5XHJcblx0XHRcdFx0XHRqb2J0aXRsZVxyXG5cdFx0XHRcdFx0dGFnbGluZVxyXG5cdFx0XHRcdFx0YmlvXHJcblx0XHRcdFx0XHRwcm9maWxlIHtcclxuXHRcdFx0XHRcdFx0aWRcclxuXHRcdFx0XHRcdFx0dmFsdWVcclxuXHRcdFx0XHRcdFx0dHlwZVxyXG5cdFx0XHRcdFx0XHRwcml2YWN5XHJcblx0XHRcdFx0XHRcdHByZWZlcnJlZENvbnRhY3RcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29ubmVjdGlvbnMge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bG9jYXRpb25cclxuXHRcdFx0XHRzZW5kZXIge1xyXG5cdFx0XHRcdFx0aWRcclxuXHRcdFx0XHRcdG5hbWVcclxuXHRcdFx0XHRcdHBpY3R1cmVcclxuXHRcdFx0XHRcdGxvY2F0aW9uXHJcblx0XHRcdFx0XHRpbmR1c3RyeVxyXG5cdFx0XHRcdFx0am9idGl0bGVcclxuXHRcdFx0XHRcdHRhZ2xpbmVcclxuXHRcdFx0XHRcdGJpb1xyXG5cdFx0XHRcdFx0cHJvZmlsZSB7XHJcblx0XHRcdFx0XHRcdGlkXHJcblx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdHR5cGVcclxuXHRcdFx0XHRcdFx0cHJpdmFjeVxyXG5cdFx0XHRcdFx0XHRwcmVmZXJyZWRDb250YWN0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlY2VpdmVyIHtcclxuXHRcdFx0XHRcdGlkXHJcblx0XHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0XHRwaWN0dXJlXHJcblx0XHRcdFx0XHRsb2NhdGlvblxyXG5cdFx0XHRcdFx0aW5kdXN0cnlcclxuXHRcdFx0XHRcdGpvYnRpdGxlXHJcblx0XHRcdFx0XHR0YWdsaW5lXHJcblx0XHRcdFx0XHRiaW9cclxuXHRcdFx0XHRcdHByb2ZpbGUge1xyXG5cdFx0XHRcdFx0XHRpZFxyXG5cdFx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdFx0XHR0eXBlXHJcblx0XHRcdFx0XHRcdHByaXZhY3lcclxuXHRcdFx0XHRcdFx0cHJlZmVycmVkQ29udGFjdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuIl19