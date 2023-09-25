import json

def extract_team_data(input_file, output_file):
    with open(input_file, "r") as json_file:
        data = json.load(json_file)

    filtered_data = []
    for team in data:
        
        filtered_data.append(f'Name: "{team["Name"]}", Key: "{team["Key"]}", TeamID: {team["TeamID"]}, WikipediaLogoUrl: "{team["WikipediaLogoUrl"]}", WikipediaWordMarkUrl: "{team["WikipediaWordMarkUrl"]}"')

    with open(output_file, "w") as json_file:
        json.dump(filtered_data, json_file, indent=4)

if __name__ == "__main__":
    input_file = "all-teams.json"
    output_file = "all-teams-filtered.json"

    extract_team_data, output_file
