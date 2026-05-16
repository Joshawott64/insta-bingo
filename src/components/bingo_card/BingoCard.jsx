import { HiOutlineXCircle } from "react-icons/hi";

const BingoCard = ({
  id,
  handleDelete,
  bColumn,
  iColumn,
  nColumn,
  gColumn,
  oColumn,
  name,
}) => {
  return (
    <div className="w-3/4 lg:w-4/6 bg-gray-100 p-4 rounded-2xl drop-shadow-lg">
      <div className="flex flex-row justify-end w-full text-2xl">
        <button onClick={() => handleDelete(id)}>
          <HiOutlineXCircle />
        </button>
      </div>
      <div className="flex flex-col gap-y-4 w-full justify-center place-items-center">
        <div className="flex flex-col justify-center place-items-center w-full">
          <p>{name}'s Card</p>
          <div className="w-full h-1 bg-black rounded-lg"></div>
        </div>
        <div>
          <table className="text-center">
            <thead>
              <tr className="font-extrabold text-2xl">
                <td>B</td>
                <td>I</td>
                <td>N</td>
                <td>G</td>
                <td>O</td>
              </tr>
            </thead>
            <tbody className="border-2 border-black text-lg">
              <tr className="border-2 border-black">
                <td className="h-9 w-9 border-2 border-black">{bColumn[0]}</td>
                <td className="h-9 w-9 border-2 border-black">{iColumn[0]}</td>
                <td className="h-9 w-9 border-2 border-black">{nColumn[0]}</td>
                <td className="h-9 w-9 border-2 border-black">{gColumn[0]}</td>
                <td className="h-9 w-9 border-2 border-black">{oColumn[0]}</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="h-9 w-9 border-2 border-black">{bColumn[1]}</td>
                <td className="h-9 w-9 border-2 border-black">{iColumn[1]}</td>
                <td className="h-9 w-9 border-2 border-black">{nColumn[1]}</td>
                <td className="h-9 w-9 border-2 border-black">{gColumn[1]}</td>
                <td className="h-9 w-9 border-2 border-black">{oColumn[1]}</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="h-9 w-9 border-2 border-black">{bColumn[2]}</td>
                <td className="h-9 w-9 border-2 border-black">{iColumn[2]}</td>
                <td className="h-9 w-9 border-2 border-black">
                  <p className="text-xs">Free</p>
                </td>
                <td className="h-9 w-9 border-2 border-black">{gColumn[2]}</td>
                <td className="h-9 w-9 border-2 border-black">{oColumn[2]}</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="h-9 w-9 border-2 border-black">{bColumn[3]}</td>
                <td className="h-9 w-9 border-2 border-black">{iColumn[3]}</td>
                <td className="h-9 w-9 border-2 border-black">{nColumn[3]}</td>
                <td className="h-9 w-9 border-2 border-black">{gColumn[3]}</td>
                <td className="h-9 w-9 border-2 border-black">{oColumn[3]}</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="h-9 w-9 border-2 border-black">{bColumn[4]}</td>
                <td className="h-9 w-9 border-2 border-black">{iColumn[4]}</td>
                <td className="h-9 w-9 border-2 border-black">{nColumn[4]}</td>
                <td className="h-9 w-9 border-2 border-black">{gColumn[4]}</td>
                <td className="h-9 w-9 border-2 border-black">{oColumn[4]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BingoCard;
