import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { SectionCards } from "@/components/section-cards";

function HomePage() {
  return (
    <div className="space-y-4">
      {/* Welcome Banner */}
      <section className="grid grid-cols-1">
        <Card className="p-4 flex items-center space-x-4 text-center">
          <Avatar className="h-12 w-12">
            {/* Replace with actual avatar image url if available, otherwise keep placeholder */}
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>RW</AvatarFallback>{" "}
            {/* Initials for Robert Wilson */}
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">
              Welcome back, Robert Wilson!
            </h2>
            <p className="text-muted-foreground">
              Here's an overview of your account.
            </p>
          </div>
        </Card>
      </section>
      {/* Welcome Banner End */}

      {/* Dashboard Cards */}
      <SectionCards />
    </div>
  );
}

export default HomePage;
