
/**
 * standard JS way to have a list of unchanging value
 */
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const emre = {
    name: "Emre", 
    role: ADMIN
}


/**
 * typescript enum solution
 */

enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

const yusuf = {
    name: "yusuf",
    role: Role.ADMIN
}