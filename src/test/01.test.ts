import {addBooks, addCompany, removeBook, updateBook, updateCompanyTitle, upgradeUserLaptop, UserCity, UserType} from "./01";

let user: UserType

beforeEach(() => {
    user = {
        name: "Konstantin",
        hair: 32,
        address: {
            city: "Soligorsk",
            house: 6
        },
        laptop: {
            title: "TUF"
        },
        books: ["js", "React", "css", "html"],
        companies: [{id: 1, title: "EPAM"}, {id: 2, title: "NASA"}, {id: 3, title: "Shell"}]
    }
})

test("upgrade laptop", () => {

    const userCopy = upgradeUserLaptop(user, "ExTUF")

expect(user).not.toBe(userCopy)
expect(user.address).toBe(userCopy.address)
expect(user.laptop).not.toBe(userCopy.laptop)
expect(user.laptop.title).toBe("TUF")
expect(userCopy.laptop.title).toBe("ExTUF")
})

test("change city", () => {

    const userCopy = UserCity(user, "Minsk")

    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.city).toBe("Soligorsk")
    expect(userCopy.address.city).toBe("Minsk")
})

test("add new books", () => {

    const userCopy = addBooks(user, ["ts", "rest API"])

    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(userCopy.books[5]).toBe("rest API")
})

test("update book", () => {

    const userCopy = updateBook(user, "js", "ts")

    expect(userCopy.books[0]).toBe("ts")
    expect(user.books[0]).toBe("js")
})

test("remove book", () => {

    const userCopy = removeBook(user, "js")

    expect(userCopy.books[0]).toBe("React")
    expect(user.books[0]).toBe("js")
})

test("add company", () => {

    const userCopy = addCompany(user, {id: 4, title: "Google"})

    expect(userCopy.companies[3].title).toBe("Google")
    expect(user.companies[3]).toBeUndefined()
})

test("update company", () => {

    const userCopy = updateCompanyTitle(user, 1, "Google")

    expect(userCopy.companies.length).toBe(3)
    expect(user.companies[0].title).toBe("EPAM")
    expect(userCopy.companies[0].title).toBe("Google")
})