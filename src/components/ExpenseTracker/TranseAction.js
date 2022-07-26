import { useState } from "react";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const TranseAction = ({ transaction, onDelete }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transaction);

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTransction(e.target.value);
  };

  const filteredTransction = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transaction);
      return;
    }
    const filtered = transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  useEffect(() => {
    filteredTransction(searchItem);
  }, [transaction]);

  if (!transaction.length)
    return (
      <div>
        <p className="p1">Click On 'Add' Button To Add Transaction</p>
        <p className="p2">Developed By Ali Doostali</p>
      </div>
    );
  return (
    <>
      <div style={{ height: "30px", marginBottom: "5px" }}>
        <input
          type="text"
          value={searchItem}
          onChange={changeHandler}
          placeholder="Search..."
          className="search"
        />
      </div>
      <section>
        {filteredTnx.length ? (
          filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{
                borderRight: t.type === "expense" && "4px solid #f00606",
                backgroundColor: t.type === "expense" && "#F7B3BA",
              }}
            >
              <span>{t.desc}</span>
              <span>{t.amount}</span>
              <button
              className="btnDelete"
              style={{ backgroundColor: t.type === "expense" && "#F7B3BA" }}
              onClick={() => onDelete(t.id)}>
                <FaTrashAlt style={{ color: "#f00606" }}/>
              </button>
            </div>
          ))
        ) : (
          <h3>No Item Maches !</h3>
        )}
      </section>
    </>
  );
};

export default TranseAction;
