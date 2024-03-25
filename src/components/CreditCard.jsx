import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CreditCard = ({ data }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={data.name}
        image={`https://image.tmdb.org/t/p/w185/${data.profile_path}`}
        height="185"
      />
      <Typography
        color="black"
        sx={{
          "&::before": {
            content: `'${data.name}'`,
            backgroundColor: "#fff",
          },
        }}
        marginTop={-6}
      ></Typography>
    </Card>
  );
};

export default CreditCard;
