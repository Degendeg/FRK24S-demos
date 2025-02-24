import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// En reusable card komponent som visar en titel, beskrivning och en valfri bild
const ComponentCard = ({ title, description, image }) => {
  return (
    <Card className="card" sx={{ maxWidth: 395, minHeight: 250, m: 2 }}>
      {/* Visar bild om en finns (conditional) */}
      {image && <CardMedia component="img" height="140" image={image} alt={title} />}
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  )
}
export default ComponentCard