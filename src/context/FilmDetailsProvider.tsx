import React, { createContext, useState } from "react";
import Film from "../database/model/Film";
import DetailsDialog from "../components/common/DetailsDialog";

export const detailsDialogBox = createContext({
  handleOpen: (film: Film) => {},
});

type Props = {
  children: React.ReactNode;
};

export default function FilmDetailsProvider(props: Props) {
  const { children } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [details, setDetails] = useState<Film>(new Film());

	const handleOpen = (film: Film):void => {
		setDetails(film);
		setOpen(true);
	}

  return (
    <detailsDialogBox.Provider value={{ handleOpen }}>
      {children}
			<DetailsDialog film={details} open={open} handle={setOpen} />
    </detailsDialogBox.Provider>
  );
}
