const pageid = process.env.PAGE_ID!
const pagetoken = process.env.PAGE_ACCESS_TOKEN!



export async function GET() {
 try {
    const pageUrl = `https://graph.facebook.com/v18.0/${pageid}?fields=name,picture.type(large)&access_token=${pagetoken}`;
    
    const pageResp = await fetch(pageUrl);
    
    if (!pageResp.ok) {
      throw new Error(`Error fetching page: ${pageResp.status} ${pageResp.statusText}`);
    }
    
    const pageData = await pageResp.json(); // assign JSON to variable
    
    console.log(pageData); // you now have pageData.name, pageData.picture, etc.
    
    return pageData;
  } catch (error) {
    console.error("Failed to fetch Facebook page:", error);
    return null;
  }   
}


