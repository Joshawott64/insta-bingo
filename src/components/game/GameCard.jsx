import { HiStar } from "react-icons/hi";

const GameCard = ({
  bColumn,
  iColumn,
  nColumn,
  gColumn,
  oColumn,
  name,
  usedNumbers,
}) => {
  return (
    <div className="flex flex-col justify-center place-items-center gap-y-1 place-self-center w-full md:w-3/4 bg-gray-200 p-2 md:p-3 lg:p-4 rounded-xl drop-shadow-lg">
      <div className="flex flex-col justify-center place-items-center w-full">
        <p>{name}'s Card</p>
        <div className="w-full h-0.5 bg-black rounded-lg"></div>
      </div>
      <table className="text-center">
        <thead>
          <tr className="font-semibold text-base">
            <td>B</td>
            <td>I</td>
            <td>N</td>
            <td>G</td>
            <td>O</td>
          </tr>
        </thead>
        <tbody className="border border-black">
          <tr className="border border-black">
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(bColumn[0]) ? (
                <HiStar className="text-2xl place-self-center "></HiStar>
              ) : (
                <p>{bColumn[0]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(iColumn[0]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{iColumn[0]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(nColumn[0]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{nColumn[0]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(gColumn[0]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{gColumn[0]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(oColumn[0]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{oColumn[0]}</p>
              )}
            </td>
          </tr>
          <tr className="border border-black">
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(bColumn[1]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{bColumn[1]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(iColumn[1]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{iColumn[1]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(nColumn[1]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{nColumn[1]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(gColumn[1]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{gColumn[1]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(oColumn[1]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{oColumn[1]}</p>
              )}
            </td>
          </tr>
          <tr className="border border-black">
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(bColumn[2]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{bColumn[2]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(iColumn[2]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{iColumn[2]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(nColumn[2]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{nColumn[2]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(gColumn[2]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{gColumn[2]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(oColumn[2]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{oColumn[2]}</p>
              )}
            </td>
          </tr>
          <tr className="border border-black">
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(bColumn[3]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{bColumn[3]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(iColumn[3]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{iColumn[0]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(nColumn[3]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{nColumn[3]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(gColumn[3]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{gColumn[3]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(oColumn[3]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{oColumn[3]}</p>
              )}
            </td>
          </tr>
          <tr className="border border-black">
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(bColumn[4]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{bColumn[4]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(iColumn[4]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{iColumn[4]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(nColumn[4]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{nColumn[4]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(gColumn[4]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{gColumn[4]}</p>
              )}
            </td>
            <td className="h-8 w-8 border border-black">
              {usedNumbers.includes(oColumn[4]) ? (
                <HiStar className="text-2xl place-self-center"></HiStar>
              ) : (
                <p>{oColumn[4]}</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameCard;
