
function mockEventAPI() {
    
    const getEventCount = function(input: string) {
        return input.length;
    }

    return { getEventCount };
}

export default mockEventAPI()