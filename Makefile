COLOR := "\e[1;36m%s\e[0m\n"

.PHONY: run, stop, clean
run: ## Run NextJS Coinbase Dashboard
	@printf $(COLOR) "Running docker-compose..."
	@docker-compose up

stop:
	@printf $(COLOR) "Stopping docker-compose..."
	@docker-compose down


clean:
	rm -rf .next
	
