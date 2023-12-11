function paginate(itemsPerPage: number, targArrayLength: number) {
  let pagesTotal = Math.ceil(targArrayLength / itemsPerPage);
  return pagesTotal;
}

export { paginate };
