export const CardModal = (props: any) => {
  return (
    <div className="px-10 pb-10">
      <p>
        <span className="font-bold">Name :</span> {props.name}
      </p>
      <p>
        <span className="font-bold">Printed Total :</span> {props.printedTotal}
      </p>
      <p>
        <span className="font-bold">PTCGO Code :</span> {props.ptcgoCode}
      </p>
      <p>
        <span className="font-bold">Series :</span> {props.series}
      </p>
      <p>
        <span className="font-bold">Total :</span> {props.total}
      </p>
      <p>
        <span className="font-bold">Release Date :</span> {props.releaseDate}
      </p>
      <p>
        <span className="font-bold">Updated At :</span> {props.updatedAt}
      </p>
    </div>
  );
};
