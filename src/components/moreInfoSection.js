import { React } from 'react';
import { Box, Link } from '@chakra-ui/layout';

export const MoreInfoSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box py={[5,8]} height={["auto", "auto"]} key={section.sectionType} backgroundImage="url('https://storage.builderall.com//franquias/2/6203456/editor-html/6882458.png')" color={section.textColor.hex} id={section.sectionType} fontFamily="sfuitextheavy">
    <Box py={[5,10]} textAlign="center" fontSize={["30px", "48px"]} lineHeight="1.1em" fontWeight="500">
      {section.lineOne[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
    </Box>
    <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} target="_blank">
      <img src='https://storage.builderall.com//franquias/2/6203456/editor-html/6093303.png' alt="instagram" style={{'maxWidth': "400px", 'padding': '0 60px 5px', 'margin': 'auto'}}/>
    </Link>
    <Box textAlign="center" w={["88%", "50%"]} margin="auto" mb={5} lineHeight="1.1em" fontWeight="500">
      <Box pb={5}>(Click en la imagen para ir al Whatsapp)</Box>
      {
      section.titleLineTwo?.map((item, index) => item.children[0].marks.length ? 
      <Box key={item.text} fontSize={["14px","24px"]} pb={1}  style={getBoxClassNames(item.children[0].marks[0], section.titleLineTwo[index].markDefs, item.children[0])}>{item.children[0].text}</Box> : 
      <Box key={item.text} my={2} mx={3} textAlign="center" fontSize={["14px","24px"]} pb={1}>{item.children[0].text}</Box>)
      }

      {
        section.lineThree?.map((item, index) => item.children[0].marks.length ? 
        <Box key={item.text} fontSize={["14px","24px"]} pb={1}  style={getBoxClassNames(item.children[0].marks[0], section.lineThree[index].markDefs, item.children[0])}>{item.children[0].text}</Box> : 
        <Box key={item.text} my={2} mx={3} textAlign="center" fontSize={["14px","24px"]} pb={1}>{item.children[0].text}</Box>)
      }

      {
        section.lineFour?.map((item, index) => item.children[0].marks.length ? 
        <Box key={item.text} fontSize={["14px","24px"]} pb={1}  style={getBoxClassNames(item.children[0].marks[0], section.lineFour[index].markDefs, item.children[0])}>{item.children[0].text}</Box> : 
        <Box key={item.text} my={2} mx={3} textAlign="center" fontSize={["14px","24px"]} pb={1}>{item.children[0].text}</Box>)
      }
    </Box>
    <Box textAlign="center" my={5}>
      <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} target="_blank" display="block" height="70px" width={["88%","488px"]} borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor={section.ctaBackgroundColor.hex} fontFamily="sfuitextheavy">
        <Box fontSize={["19px","28px"]} pt={4} lineHeight="1.1em" color={section.ctaColor.hex} fontFamily="sfuitextheavy">{section.CtalineOne}</Box>
        <Box fontSize={["12px","16px"]} color={section.ctaColor.hex} fontFamily="sfuitextregular">{section.CtalineTwo}</Box>
      </Link>
    </Box>
    <Box textAlign="center" fontSize={["12px","18px"]} fontWeight="bolder" fontStyle="italic" fontFamily="Montserrat, sans-serif">
      {section.lineFive[0]?.children.map(item => item.marks.length ? <span key={item.text} style={getBoxClassNames(item.marks[0], section.lineFive[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
  </Box>
)
}