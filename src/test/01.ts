export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
    laptop: {
        title: string
    },
    books: Array<string>
    companies: Array<{id: number, title: string}>
}

export const upgradeUserLaptop = (u: UserType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const UserCity = (u: UserType, city: string) => {
    return {
        ...u,
        address: {
            ...u.address,
            city
        }
    }
}

export const addBooks = (u: UserType, books: Array<string>) => {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export const updateBook = (u: UserType, oldBook: string, newBook: string) => {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export const removeBook = (u: UserType, removeBook: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== removeBook)
    }
}

export const addCompany = (u: UserType, company: {id: number, title: string}) => {
    return {
        ...u,
        companies: [...u.companies, company]
    }
}

export const updateCompanyTitle = (u: UserType, id: number, title: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title} : c)
    }
}