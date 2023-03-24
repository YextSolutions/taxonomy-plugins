export async function specialtiesToCategories(data){

    const changedFields = data.changedFields.fieldNames[0]
    const entityId = data.entityId

    if (changedFields === "taxonomy_relatedSpecialty") {
        var categoryId = findCorrespondingCategory(data.primaryProfile.taxonomy_relatedSpecialty[0])
        var myData = {
            "categoryIds" :[categoryId]
        }
        const entityUrlEndpoint = "https://api.yext.com/v2/accounts/me/entities/" + entityId + "?v=20230206&api_key=${{apiKey}}"
        const request = new Request(entityUrlEndpoint, {
            method: 'PUT',
            headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify(myData)
            });
        const myResponse = await fetch(request).then(response => response.json())
    }
    return null;
}

function findCorrespondingCategory(specialty){

    var myObj = {
        "SPEC-2621": "2150",
        "SPEC-2": "1353",
        "SPEC-3": "2151",
        "SPEC-59": "2174",
        "SPEC-7": "1505881",
        "SPEC-8": "1505882",
        "SPEC-29999": "20000003",
        "SPEC-64": "1505883",
        "SPEC-16": "2253",
        "SPEC-183333": "2176",
        "SPEC-9": "1437822",
        "SPEC-10": "1254",
        "SPEC-125": "1135524",
        "SPEC-11": "1505890",
        "SPEC-12": "2152",
        "SPEC-14": "1135560",
        "SPEC-15": "1357",
        "SPEC-66": "1135529",
        "SPEC-70": "1257",
        "SPEC-57": "1505893",
        "SPEC-19": "2177",
        "SPEC-50": "2254",
        "SPEC-4169": "1505899",
        "SPEC-106": "1269",
        "SPEC-20": "1505900",
        "SPEC-21": "2155",
        "SPEC-499": "163",
        "SPEC-22": "1358",
        "SPEC-126": "20000008",
        "SPEC-18": "2153",
        "SPEC-6": "1135548",
        "SPEC-68": "1505903",
        "SPEC-4480": "1120592",
        "SPEC-23": "2157",
        "SPEC-24": "1359997",
        "SPEC-25": "2158",
        "SPEC-49": "1330",
        "SPEC-26": "20000013",
        "SPEC-108": "1120597",
        "SPEC-27": "1266",
        "SPEC-120": "20000034",
        "SPEC-8333": "1505907",
        "SPEC-28": "1362",
        "SPEC-29": "1120594",
        "SPEC-54": "1245",
        "SPEC-30": "1359927",
        "SPEC-71": "20000018",
        "SPEC-67": "1135569",
        "SPEC-65": "20000019",
        "SPEC-73": "1135570",
        "SPEC-74": "1135572",
        "SPEC-75": "2144",
        "SPEC-76": "1551050",
        "SPEC-81": "1135573",
        "SPEC-86": "2164",
        "SPEC-87": "1135574",
        "SPEC-91": "1135576",
        "SPEC-92": "1135575",
        "SPEC-95": "1135565",
        "SPEC-119": "1135561",
        "SPEC-96": "1135561",
        "SPEC-97": "20000021",
        "SPEC-93": "1135556",
        "SPEC-94": "1135554",
        "SPEC-102": "1135549",
        "SPEC-104": "1505844",
        "SPEC-105": "1135547",
        "SPEC-84": "1135538",
        "SPEC-62": "1135527",
        "SPEC-82": "1505913",
        "SPEC-79": "1505915",
        "SPEC-88": "1135525",
        "SPEC-33": "20000023",
        "SPEC-56": "20000022",
        "SPEC-55": "1359761",
        "SPEC-34": "1255",
        "SPEC-36": "1367",
        "SPEC-37": "1135544",
        "SPEC-38": "1312",
        "SPEC-39": "2161",
        "SPEC-53": "1368",
        "SPEC-60": "1339",
        "SPEC-4162": "20000025",
        "SPEC-42": "1135545",
        "SPEC-43": "2185",
        "SPEC-58": "20000041",
        "SPEC-45": "1359716",
        "SPEC-46": "2162",
        "SPEC-47": "1331",
        "SPEC-48": "20000042",
        "SPEC-13445": "2175",
        "SPEC-8597": "1135559"
    }

    var categoryId = myObj[specialty]
    
    return categoryId
}