import { isEmpty } from 'lodash'
export const emptyFunc = (param) => param

export const normaliseTerm = (term) => term.toLocaleLowerCase()

export const isTermInsideItems = ({ items, term }) =>
  isEmpty(term)
    ? true
    : items.some((item) =>
        typeof item === 'string'
          ? normaliseTerm(item).includes(normaliseTerm(term))
          : isTermInsideArray({ arr: item, term }),
      )

export const isTermInsideArray = ({ arr, term }) =>
  arr.some((item) => isTermInsideItems({ items: [item], term }))
