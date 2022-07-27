import { useState } from "react";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { XyzTransitionGroup } from "@animxyz/react";
import { XyzTransition } from "@animxyz/react";

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
      <XyzTransition appear xyz="fade rotate-right ease-out-back">
        <div>
          <p className="p1">Click On 'Add' Button To Add Transaction</p>
          <p className="p2">Developed By AliDoostali</p>
        </div>
      </XyzTransition>
    );
  return (
    <>
      <XyzTransitionGroup
        appear
        xyz="fade small out-down out-rotate-right appear-stagger"
        className="squre"
      >
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
                  backgroundColor: t.type === "expense" && "#e9cac3",
                }}
              >
                <span style={{ marginBottom: "3px", fontSize: "20px" }}>
                  {t.desc}
                </span>
                <span style={{ fontSize: "20px" }}>{t.amount} $</span>
                <button
                  className="btnDelete"
                  style={{ backgroundColor: t.type === "expense" && "#e9cac3" }}
                  onClick={() => onDelete(t.id)}
                >
                  <FaTrashAlt
                    style={{
                      color: "#f00606",
                      width: "20px",
                      height: "20px",
                      marginTop: "3px",
                    }}
                  />
                </button>
              </div>
            ))
          ) : (
            <XyzTransition appear xyz="fade rotate-right ease-out-back">
              <h3>No Item Maches !</h3>
            </XyzTransition>
          )}
        </section>
      </XyzTransitionGroup>
    </>
  );
};

export default TranseAction;
