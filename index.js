/*
  An npm JavaScript library for retriving donation addresses for donations.
*/

'use strict'

// All the organizations available in this library are listed here.
// Please submit a Pull Request (PR) on GitHub if you'd like your organization
// added to the list:
// https://github.com/Permissionless-Software-Foundation/bch-donation
const orgs = [
  {
    // Permissionless Software Foundation
    org: 'psf',
    description: 'Permissionless Software Foundation',
    website: 'https://psfoundation.cash',
    addresses: {
      // For donations. Will burn PSF tokens when BCH is sent to this address.
      donations: 'bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr'
    }
  },
  {
    org: 'abc',
    description: 'Bitcoin ABC',
    website: 'https://www.bitcoinabc.org/',
    addresses: {
      donations: 'bitcoincash:qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88'
    }
  },
  {
    org: 'bchd',
    description: 'BCHD full node in Go',
    website: 'https://bchd.cash/',
    addresses: {
      donations: 'bitcoincash:qrhea03074073ff3zv9whh0nggxc7k03ssh8jv9mkx'
    }
  }
]

// Retrieve the addresses array from the matching organization.
function getAddress (org) {
  // Match the input string to an organization in the list.
  const matches = orgs.filter(item => item.org === org)

  // Throw an error if no matching entries are found.
  if (!matches) {
    throw new Error('Could not find an organization with that handle.')
  }

  // Throw an error if more than one match is found.
  if (matches.length > 1) throw new Error('Multiple organizations were found!')

  // Return the match.
  return matches[0].addresses
}

module.exports = getAddress
