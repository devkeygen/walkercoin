import { SiX } from "react-icons/si";
import { MessageCircle, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border" data-testid="footer">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 font-mono" data-testid="footer-title">$WALKER</h3>
          <p className="text-muted-foreground max-w-md mx-auto" data-testid="footer-description">
            The mystical journey begins here. Join the community of digital wanderers.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://x.com/StinkWalkerOfc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            data-testid="footer-twitter"
          >
            <SiX className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            data-testid="footer-telegram"
          >
            <MessageCircle className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            data-testid="footer-discord"
          >
            <Users className="text-2xl" />
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground" data-testid="footer-copyright">
          <p>&copy; 2024 $WALKER. All paths lead to mystery.</p>
        </div>
      </div>
    </footer>
  );
}
