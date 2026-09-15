import { render } from "@testing-library/react";
import Post from "./Post";

describe("Post", () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn();
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it("ska hämta rätt data från API:et", async () => {
        vi.mocked(globalThis.fetch).mockResolvedValue({
            json: async () => ({})
        } as Response);

        render(<Post id={8} />);

        expect(globalThis.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/8");
    })
});    