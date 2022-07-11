import axios from "axios";
import { useEffect, useState } from "react";
import useSearch from "../../../hooks/useSearch";
import filter from "./filter";

export const fetchUsers = async () => {
    const { data } = await axios("https://randomuser.me/api/?results=10&nat=us");
    return data["results"].map((user: any) => ({
        first: user["name"].first,
        last: user["name"].last,
        thumbnail: user["picture"].thumbnail,
    }));
};

interface IUser {
    first: string;
    last: string;
    thumbnail: string;
}

function Directory() {
    const [users, setUsers] = useState<IUser[]>([]);
    const { search, onSearch } = useSearch();
    const { filtered } = filter(users, search);

    useEffect(() => {
        fetchUsers().then((d) => setUsers(d));
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center">
            <input
                className="m-3"
                placeholder="Search Users"
                value={search}
                onChange={onSearch}
            />
            <div className="list-group">
                {filtered &&
                    filtered.map((user) => (
                        <div className="list-group-item d-flex align-items-center">
                            <img className="mr-3" src={user.thumbnail} alt="" />
                            <p className="my-auto">
                                {user.first} {user.last}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Directory;
