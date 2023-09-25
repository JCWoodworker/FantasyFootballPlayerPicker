import json

def filter_json_by_active(input_file, output_file):
    with open(input_file, "r") as json_file:
        data = json.load(json_file)

    filtered_data = []
    for item in data:
        if item["Active"] == True:
            filtered_data.append(f'PlayerID: {item["PlayerID"]}, FirstName: "{item["FirstName"]}", LastName: "{item["LastName"]}", Team: "{item["Team"]}", Position: "{item["Position"]}", PhotoUrl: "{item["PhotoUrl"]}", FanDuelPlayerID: {item["FanDuelPlayerID"]}, DraftKingsPlayerID: {item["DraftKingsPlayerID"]}, TeamID: {item["TeamID"]}')

    with open(output_file, "w") as json_file:
        json.dump(filtered_data, json_file, indent=4)

if __name__ == "__main__":
    input_file = "all-players.json"
    output_file = "all-players-active.json"

    filter_json_by_active(input_file, output_file)
