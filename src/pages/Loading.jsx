import PuffLoader from "react-spinners/PuffLoader";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
   
};
export default function Loading() {

    return (
        <div className="mt-5">
                <div className="sweet-loading">
                    <PuffLoader                    
                        loading={true}
                        cssOverride={override}
                        size={300}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
        </div>
    )
}
