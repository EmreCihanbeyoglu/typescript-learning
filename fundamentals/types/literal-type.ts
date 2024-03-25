function setRole (role: "admin" | "read_only") {
    console.log(role);
}


setRole('admin') // print put role
//setRole('emre'); // error since it is not either admin or read_only which are defined in the type